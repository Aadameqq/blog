---
title: Konstrukcja case i dekonstrukcja w Ruby - TIL
keywords: til, today i learned, ruby, ruby on rails, ror
categorySlug: til
date: 17.08.2025
description: Kolejny dzień nauki Ruby'ego - case, pattern matching
---
## Konstrukcja case
```ruby
input = 'EIT'

case input
when 'W' then puts "Going forward!"
when 'S' then puts "Going back!"
when 'EXIT'
  puts "Bye!"
  handle_exit
else
  puts "unknown command"
end
```
Dodatkowo można napisać też coś takiego.

```ruby
input = 1

case input
when Integer then puts "Num"
when String then puts "Text"
else
  puts "unknown"
end
```
Jak to działa?
Konstrukcja `case ... when` wykonuje na obiekcie przy when metodę `===`.
```ruby
case x
when y
  # Ruby sprawdza: y === x
end
```
Jako, iż w Ruby wszystko jest obiektem, to również klasy. Tak więc dowolna klasa, np. `Integer` jest instancją klasy `Class`,
która ma zdefiniowaną metodę `===`.
```ruby
def ===(obj)
    obj.is_a?(self)
end
```
Gdy przy when mamy np. 5 zamiast klasy, to domyślnie zadanie delegowane jest do `==`.
Niektóre klasy biblioteki standardowej mają zmienioną definicję. Przykładem jest klasa `Range`
obsługująca zakresy. Metoda `===` w jej przypadku sprawdza czy argument zawiera się w zakresie.
```ruby
puts (1..10).===(5) # true
puts (1..10).===(11) # false
```

## Dekonstrukcja
```ruby
[1,2] => [a,b]
```
Do dekonstrukcji w tym języku służy nam operator `=>`, który *dopasowuje oraz przypisuje* wartość do wzorca
```ruby
wartość => wzorzec
```
Pod spodem Ruby używa metod
- `deconstruct` w przypadku dekonstrukcji do tablicy
- `deconstruct_keys` w przypadku hashy

Przy ich pomocy klasa może zdefiniować, jak można jej instancję zamienić na tablicę lub hash.
Czyli `test => [a,b]` będzie używało `test.deconstruct()`.
### Przykład
Powiedzmy, że chcemy, by naszą klasę Pair dało się zdekonstruować jak tablicę.
```ruby
class Pair
  def initialize x, y
    @x, @y = x, y
  end
end

p = Pair.new(1, 3)
```
Teraz gdy spróbujemy dokonać dekonstrukcji
```ruby
p => [a, b]
puts b
```
Zobaczymy błąd `#<Pair:... @x=1, @y=3> does not respond to #deconstruct`.
Spróbujmy zaimplementować metodę `deconstruct`.
```ruby
class Pair
  def initialize x, y
    @x, @y = x, y
  end

  def deconstruct
    [@x, @y]
  end
end

p = Pair.new(1, 3)

p => [_, b]
puts b # wypisze 3
```

Operatorem `=>` można również dekonstruować obiekty. W tym przypadku wywoływana jest metoda `deconstruct_keys`

```ruby
h = {
  name: "Adam",
  age: 20
}

h => { name: name }

puts name # wypisze Adam
```

W przypadku, gdy wzorzec nie pasuje do wartości, rzucany jest wyjątek

## Linki
Dziś brak :(