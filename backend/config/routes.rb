# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#show'

  namespace :admin do
    resources :channels
    resource to: 'homes#show'
  end
end
