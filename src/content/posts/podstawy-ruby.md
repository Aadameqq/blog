---
title: Nauka podstaw Ruby'ego - TIL
keywords: til, today i learned, ruby, ruby on rails, ror
categorySlug: til
date: 13.08.2025
description: Kolejny dzień nauki Ruby'ego - nauka podstaw języka
---
Kolejny dzień nauki Ruby'ego. Zrozumiałem dziś lepiej, jak język ten działa pod spodem 
i wiele wcześniej niezrozumiałych zapisów rozjaśniło się

Z ciekawych rzeczy:

### Wszystko jest obiektem
Wszystko jest obiektem, więc np. `1 + 2` jest równoznaczny zapisowi `1.+(2)` czyli na instancji
klasy Integer dla wartości `1` wywołujemy metodę o nazwie `+` z argumentem.
Z tego też wynika, że w Ruby'm nie ma funkcji - wszystko jest metodą. W przypadku `puts` jest to metoda wywoływana na
obiekcie globalnym.

Dodatkowo dowolną klasę wbudowaną można rozszerzać.
W ten sposób możemy sprawić, że dodawanie stanie się mnożeniem.

```ruby
class Integer
  def +(other)
    other * self
  end
end

puts 5 + 3 # wypisze 15
```

Tablica również jest obiektem, a [] to po prostu nazwa metody
Dzięki temu możemy stworzyć takiego potwora:

```ruby
class Integer
  def [](index)
    self + index
  end
end

puts 5[3] # wypisze 8
```

### Enumerable
Ruby zawiera odpowiedniki dla metod, które można kojarzyć z Typescript. Mowa tu o `map`, `forEach`, `any` itd.
Tak jak w TS, mamy w rubym dwa sposoby zapisu takich metod.
Odpowiednikiem
```ts
arr.map((val)=>val.toUpperCase())
```
jest
```ruby
arr.map { |val| val.upcase }
```

Oraz odpowiednikiem
```ts
arr.map((val) => {
    // do sth
    return val.toUpperCase()
})
```
jest
```ruby
arr.map do |val|
  # do sth
  val.upcase
end
```

## Linki
1. Ciekawy tutorial pozwalający szybko zapoznać się z Ruby'm - [link](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby)
2. Lista różnic między językiem Ruby, a innymi - [link](https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/)