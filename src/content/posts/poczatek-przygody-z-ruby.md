---
title: Początek przygody z językiem ruby
keywords: til, today i learned, ruby, ruby on rails, ror
categorySlug: til
date: 12.08.2025
description: Pierwszy wpis w ramach TIL. Początek przygody z językiem ruby.
---
Ostatnio postanowiłem spróbować swoich sił w języku Ruby. 
Skłoniła mnie do tego dosyć nietypowa i znacząco odstająca od konkurencji składnia Ruby'ego.
Dodatkowo wielokrotnie miałem okazję słyszeć wiele ciepłych słów nt tego języka.
Do nauki postanowiłem podejść w sposób pragmatyczny. Początkowo nauczę się podstaw języka i frameworka 
Ruby on Rails tak, by być w stanie cokolwiek sam napisać. Następnie wyznaczę sobie cel 
zrealizowania jakiegoś nietrudnego projektu i będę starał się go zrealizować z pomocą przeglądarki i AI.

Pierwszy kontakt z tym językiem spowodował u mnie kilka zaskoczeń:

### Nazwy funkcji
Do nazwy funkcji odpowiadającej na jakieś pytanie, np. `equals`, dodajemy na końcu znak zapytania.
Wychodzi nam wówczas coś w stylu `entity.equals?`. Dodatkowo przy wywołaniu funkcji nie musimy używać nawiasów `()`.

### Wszystko w Ruby zwraca wartość.
Każde wyrażenie zwraca w rubym wartość. Możemy zrobić coś takiego:
```ruby
a = 1

result = if a == 1
           true
         else
           false
         end

puts result # zwróci true
```

### Active record w RoR
Modele nie przechowują pól - są one pobierane z bazy danych.
Tak, że otwierając po raz pierwszy wygenerowany plik z modelem, można się zdziwić.
Jeszcze nie jestem do tego w pełni przekonany, ale czas pokaże.
