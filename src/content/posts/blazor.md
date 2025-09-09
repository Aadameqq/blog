---
title: Blazor - budowa prostej aplikacji cz. 1
keywords: til, today i learned, blazor
categorySlug: til
date: 09.09.2025
description: Blazor
---
Przy okazji pisania aplikacji mvc w Ruby on Rails zaciekawiło mnie, jak w innych technologiach działają silniki do generowania widoków.
Jako, iż głównie tworzyłem REST'y to nie miałem z nimi większej styczności. W trakcie czytania w necie na ten temat natknąłem się na Blazor,
który okazuje się dosyć ciekawy.
Można go w zasadzie nazwać odpowiednikiem React i Next.js w .NET.
Ma możliwość tworzenia aplikacji SPA przy użyciu WebAssembly, ale również aplikacji z SSR.
Dodatkowo możemy tworzyć komponenty, które dosyć mocno przypominają te z JSX.

## Prosta aplikacja TODO w Blazor WebAssembly 
W ramach testu utworzyłem prostą aplikację z listą zadań.
<img
src="/blog/images/posts/blazor/blazor-todo.png"
alt="Zdjęcie przedstawia gotową aplikację todo utworzoną w Blazor"
/>
Żeby przyśpieszyć sobie pracę, zastosowałem [bibliotekę Radzen](https://blazor.radzen.com/) z gotowymi komponentami UI.
Pominę konfigurację projektu (no, chyba że ktoś chciałby o tym wpis na blogu — jeżeli w ogóle ktokolwiek to czyta xD).
Utworzyłem sobie strukturę plików. Przypomina ona trochę tą z Next.js.
```bash
TodoApp/
├── TodoApp.csproj
├── Program.cs
├── App.razor
├── _Imports.razor
│
├── wwwroot/             ← wygenerowane przez .Net
│   ├── css/
│   │   └── app.css
│   └── index.html
│
├── Pages/               ← wygenerowane przez .Net
│   └── Home.razor
│
├── Components/          ← dodane przeze mnie
│   └── TodoItem.razor
│
└── Models/              ← dodane przeze mnie
    └── ListItem.cs
```
Na początku zajmę się modelem `ListItem`.
```csharp
public class ListItem
{
    public required string Content { get; init; }
    public bool IsFinished { get; set; }

    public void Toggle()
    {
        IsFinished = !IsFinished;
    }
}
```
Myślę, że nie ma tu co wyjaśniać.

Teraz przejdę do komponentu `TodoItem`.
Będzie on wyświetlać pojedyńcze zadanie z listy, które będzie przekazywane jako props (w Blazor nazywa się to parametrem).

Następnie tworzę komponent `SingleItem` w folderze `Components`.
W Blazor każdy komponent to klasa. By móc uzyskać dostęp do jej pól, korzystamy z `@`.
```cshtml-razor
<div>@Item.Content</div>
```
Mamy kilka szczególnych pól:
 - `@using` pozwalające dodawać importy
 - `@code` pozwalające dodawać atrybuty i metody do klasy
 - `@inject` pozwalające korzystać z IOCC

Na początku importujemy model
```cshtml-razor
@using Todo.Models
```
Teraz chcemy przyjąć `item` jako parametr komponentu.
Tworzymy więc blok `@code`, w którym tworzymy pole `Item` i oznaczamy je dekoratorem `[Parameter]`, który informuje, iż jest to parametr.
```cshtml-razor
@using Todo.Models

@code {
    [Parameter]
    public required ListItem Item { get; set; }
}
```

Skorzystam teraz z biblioteki Radzen.
```cshtml-razor
@using Todo.Models

<RadzenCard class="rz-my-3 rz-mx-auto">
    <RadzenStack Orientation="Orientation.Horizontal" AlignItems="AlignItems.Center">
        <RadzenText>@Item.Content</RadzenText>
    </RadzenStack>
</RadzenCard>

@code {
    [Parameter]
    public required ListItem Item { get; set; }
}
```
Komponent jest gotowy, teraz trzeba go przetestować.
Przejdę teraz do pliku `Pages/Home.razor`. Znajduje się tam wygenerowany boilerplate.
Przypomina on zwykły komponent, ale jest kilka różnic.
1. `@page "/"` oznacza dany komponent jako `page` obsługujący ścieżkę "/".
2. `<PageTitle>` ustawia `title` w sekcji `head`

Dodaję do tego pliku komponent, w sposób podobny do React.
```cshtml-razor
@page "/"
@using Todo.Components @* Dodaje import *@

<PageTitle>Home</PageTitle>

<SingleItem Item=@(new ListItem(){Content = "test"}) />
```
Teraz w przeglądarce można zobaczyć to

<img
src="/blog/images/posts/blazor/single-item.png"
alt="Zdjęcie przedstawia wygląd wcześniej przygotowanego komponentu w przeglądarce"
/>

Kolejna część pojawi się wkrótce.



## Linki
1. Dokumentacja Blazor - [link](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor)
2. Biblioteka Radzen - [link](https://blazor.radzen.com/)
