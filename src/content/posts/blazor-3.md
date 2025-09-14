---
title: Blazor - budowa prostej aplikacji cz. 3
keywords: til, today i learned, blazor
categorySlug: til
date: 14.09.2025
description: Blazor
---
Ostatnia część wpisu na temat budowy prostej aplikacji w Blazor.
<img
src="/blog/images/posts/blazor/blazor-todo.png"
alt="Zdjęcie przedstawia gotową aplikację todo utworzoną w Blazor"
/>

## Dodanie local storage
Niestety to nie będzie już tak łatwe, jak poprzednie funkcjonalności. Mamy w zasadzie dwie opcje:
1. wywołać kod js z Blazor (coś w stylu eval)
2. skorzystać z gotowej biblioteki do obsługi local storage

Zdecydowałem się na tą drugą opcję, dokładniej na bibliotekę [Blazored](https://github.com/Blazored/LocalStorage).
Po instalacji i konfiguracji przechodzę do `Pages/Home` i wstrzykuję serwis pozwalający na dostęp do local storage.
```cshtml-razor
@inject ILocalStorageService LocalStorage
@* @inject co_wstrzykuję nazwa_zmiennej_do_której_wstrzykuję *@
```
Utworzę następnie metodę `Save`, którą będę wywoływać przy każdej zmianie w liście zadań.
```csharp
private async Task Save()
{
    await LocalStorage.SetItemAsync(Key, Items);
}
```
Dane odczytywać będę przy załadowaniu strony — w hooku `OnInitializedAsync`.
```csharp
protected override async Task OnInitializedAsync()
{
    var found = await LocalStorage.GetItemAsync<List<ListItem>>(Key);

    if (found is not null)
    {
        Items = found;
    }
}
```
Teraz należy dodać do funkcji `HandleAdd` oraz `HandleToggle` wywołanie zapisu.
```csharp
private async Task HandleAdd()
{
    Items.Insert(0, new ListItem { Content = Input });
    Input = "";
    await Save();
}

private async Task HandleToggle(ListItem item)
{
    item.Toggle();
    await Save();
}

private async Task HandleKeyDown(KeyboardEventArgs arg) 
{
    if (arg.Key == "Enter")
    {
        await HandleAdd(); @* HandleAdd zmieniła się na asynchroniczną, więc dodaję await *@
    }
}
```
Koniec. Funkcjonalność powinna w pełni działać. Po odświeżeniu strony dodane zadania powinny być nadal widoczne.
Pełen kod możesz znaleźć [tutaj](https://github.com/Aadameqq/blazor-todo).

## Linki
Niestety brak :(
