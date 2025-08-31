---
title: Początki z Ruby on Rails - TIL
keywords: til, today i learned, ruby, ruby on rails, ror
categorySlug: til
date: 31.08.2025
description: Początki przygody z Ruby on Rails, czyli wiele zaskoczeń.
---
Przez ostatnie dwa tygodnie miałem okazję sporo czasu spędzić na testowaniu frameworka Ruby on Rails.
Jako, iż wcześniej korzystałem z tego typu narzędzi w innych językach, to nauka szła dosyć szybko. 
Wiele rzeczy kojarzyłem i wiele elementów było oczywistych. Opiszę tutaj głównie to, co najbardziej mnie zaskoczyło 
i to, z czym wcześniej się nie spotkałem.

## Wiązanie metod kontrolerów z linkami
W RoR powiązanie akcji kontrolera z jakimś path możemy zrealizować w sposób znany z innych narzędzi.
```ruby
delete "users/:id" => "users#destroy"
```
Powyższy kod powiąże path `/users/:id` z metodą `destroy` kontrolera `users_controller.rb`.
RoR udostępnia nam sposób na automatyczne podpięcie wszystkich typowych akcji CRUD.
Do tego celu służą dwie metody:
1. `resource` do pojedyńczych zasobów (np. session - użytkownik odwołuje się tylko do swojej sesji)
2. `resources` do kolekcji (np. users - użytkownik może chcieć pobrać listę userów)
```ruby
resources :users
# Robi to samo co:
get    "users"          => "users#index"
get    "users/new"      => "users#new"
post   "users"          => "users#create"
get    "users/:id/edit" => "users#edit"
get    "users/:id"      => "users#show"
patch  "users/:id"      => "users#update"
put    "users/:id"      => "users#update"
delete "users/:id"      => "users#destroy"
```
Jeśli przykładowo nie potrzebujemy strony `users/new`, to możemy ją wykluczyć w następujący sposób
```ruby
resources :users, except: [:new]
```
Kolejnym ułatwieniem jest fakt, iż dla każdej definicji route w configu, automatycznie generowane są metody pozwalające uzyskać path i url danej akcji.
Przykładowo, po definicji `get "users/new" => "users#new"` w kontrolerze możemy skorzystać z `new_user_path`
```ruby
redirect_to new_user_path
```
Lub jeżeli mamy akcję przyjmującą parametr `id`
```ruby
redirect_to user_path(user) # wywoła metodę show z id usera
# Lub prościej
redirect_to user # również wywoła metodę show z id usera
```

## Linki
Dziś brak :(