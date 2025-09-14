---
title: Blazor - budowa prostej aplikacji cz. 2
keywords: til, today i learned, blazor
categorySlug: til
date: 10.09.2025
description: Blazor
---
Kolejna część wpisu na temat budowy prostej aplikacji w Blazor.
<img
src="/blog/images/posts/blazor/blazor-todo.png"
alt="Zdjęcie przedstawia gotową aplikację todo utworzoną w Blazor"
/>

## Kontynuacja
Na początku zajmijmy się dodaniem stanu przechowującego wszystkie zadania. Zrobię to w `Pages/Home.razor`.
Dodaję w bloku `@code` nowy atrybut `Items`. Dodatkowo dodam też pętlę `foreach` do wypisywania wszystkich zadań.
```cshtml-razor
@page "/"
@using Todo.Components

<PageTitle>Home</PageTitle>

@foreach (var item in Items)
{
    <TodoItem Item="@item"/>
}

@code {
    private List<ListItem> Items = [];
}
```
Brakuje teraz najważniejszej opcji, czyli dodawania zadań.
Przy pomocy Radzen tworzę prostą strukturę pod input i przycisk.
```cshtml-razor
@page "/"
@using Todo.Components

<PageTitle>Home</PageTitle>

<h1>Your list</h1>

<RadzenStack Orientation="Orientation.Horizontal" Wrap="FlexWrap.NoWrap" class="rz-mb-10">
    <RadzenTextBox Placeholder="Enter text" Style="width: 100%" aria-label="Default TextBox"/>
    <RadzenButton Style="width:150px;" Text="Add" ButtonStyle="ButtonStyle.Primary"/>
</RadzenStack>

@foreach (var item in Items)
{
    <TodoItem Item="@item"/>
}

@code {
    private List<ListItem> Items = [];
}
```
Teraz musimy jakoś uzyskać dostęp do zawartości inputa. Służy do tego parametr `@bind-value`, 
który podpina zawartość inputa pod dany atrybut. Działa on tak, jak ustawienie `value` i `onChange` w React.
```cshtml-razor
<RadzenTextBox @bind-Value="@Input" .../>
...

@code {
    ...
    private string Input = "";
}

```
Tworzę teraz metodę `HandleAdd` która zajmie się obsługą dodania nowego zadania.
```csharp
private async Task HandleAdd()
{
    Items.Insert(0, new ListItem { Content = Input }); // chcemy, by nowe zadanie było na górze
    Input = "";
}
```
By podpiąć ją pod zdarzenie `click` na przycisku, używa się `@onclick`, lecz jako, iż używamy przycisku z Radzen to owy 
przycisk przyjmuje własny parametr `Click`.
```cshtml-razor
<RadzenButton Click="@HandleAdd"/>
```
Teraz, po wpisaniu treści zadania i wciśnięciu przycisku, pojawia się na górze nowe zadanie.

Fajnie, aby istniała teraz możliwość oznaczenia zadania jako wykonane.
Przechodzimy do `Components/TodoItem.razor` i odpowiednio edytujemy strukturę komponentu, dodając checkbox.
Następnie bindujemy `@Item.IsFinished` do niego.
```cshtml-razor
...
<RadzenStack ...>
    <RadzenText >@Item.Content</RadzenText>
    <RadzenCheckBox TValue="bool" @bind-Value="@Item.IsFinished"/>
</RadzenStack>
...
```
I w przeglądarce zobaczymy, że wszystko działa.

Na grafice z początku mogłeś zobaczyć podział na "To do" oraz "Finished".
Wprowadźmy go w najprostszy możliwy sposób. Znów wracamy do strony `Home`. 

```cshtml-razor
<RadzenText class="rz-mt-4" Visible="@Items.Exists(i => !i.IsFinished)">To do</RadzenText>
@foreach (var item in Items.Where(i => !i.IsFinished))
{
    <TodoItem Item="@item"/>
}
<RadzenText class="rz-mt-4" Visible="@Items.Exists(i => i.IsFinished)">Finished</RadzenText>
@foreach (var item in Items.Where(i => i.IsFinished))
{
    <TodoItem Item="@item"/>
}
```
Większość powinna być zrozumiała. Jedynie `Visible` może wymagać dodatkowego wyjaśnienia. Jest to parametr z Radzena, 
który pozwala warunkowo wyświetlać dany komponent.

Teraz jak sprawdzimy przeglądarkę, to okaże się, że... nie działa. Niby da się kliknąć checkboxa, ale zadanie nie zmienia sekcji, 
tzn. pozostaje w to do. W komponencie `TodoItem` zmieniamy jeden z elementów listy rodzica, ale ten rodzic nic nie wie o tej zmianie,
z tego powodu nie dochodzi do ponownego renderowania rodzica.

Spróbujmy potwierdzić tą diagnozę — wymuśmy ponowne renderowanie rodzica.
Dodamy sobie w `Pages/Home` odpowiednik `useEffect` który ustawi interwał wymuszający rerender co 3 sekundy.
Rozszerzamy metodę `OnInitializedAsync` w bloku `@code`.
```csharp
protected override async Task OnInitializedAsync()
{
    while (true)
    {
        StateHasChanged(); //  metoda wbudowana (odziedziczona), służy do wymuszenia rerenderu
        await Task.Delay(3000);
    }
}
```
Po trzech sekundach od zaznaczenia checkboxa zadanie przeskakuje do Finished. Diagnoza potwierdzona.
By naprawić ten problem, skorzystamy z `EventCallback`. Utwórzmy sobie nowy parametr w `TodoItem`.
```csharp
[Parameter] 
public EventCallback<ListItem> HandleToggle { get; set; }
```
A następnie przekażmy go w rodzicu.
```cshtml-razor
...
<TodoItem Item="@item" HandleToggle="@HandleToggle"/>
...
@code {
private async Task HandleToggle(ListItem item)
{
    item.Toggle();
}
...
}
```
Teraz możecie się zastanawiać, dlaczego `EventCallback` a nie zwykła funkcja, oraz dlaczego zwykła metoda magicznie
zamienia się w `EventCallback`. `EventCallback` to w uproszczeniu nakładka na funkcję, która **dodatkowo wywołuje rerender**.
Blazor przy przekazaniu funkcji jako parametru automatycznie konwertuje ją na `EventCallback`.
Teraz użyjmy jej w `TodoItem`.
```cshtml-razor
<RadzenCheckBox TValue="bool" Value="@Item.IsFinished" Change="@(() => HandleToggle.InvokeAsync(Item))"/>
```
I zobaczymy, że wszystko działa, jak powinno.
Operację usuwania zadania implementuje się w podobny sposób, więc to pominę.

Część ostatnia: [kliknij](http://aadameqq.github.io/blog/posts/blazor-3)

## Linki
1. Dokumentacja Blazor - [link](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor)
2. Biblioteka Radzen - [link](https://blazor.radzen.com/)
