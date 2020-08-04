Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :orders, only: [:index, :create, :destroy]
    resources :stores, only: [:index]
    resources :meals, only: [:show]
  end



  get '*path' => redirect('/')
end
