Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :orders, only: [:index, :create, :destroy]
    resources :stores, only: [:index]
    resources :meals, only: [:index, :show]
  end

  # get '*path' => redirect('/')
  # get '/nutrition-calculator', to: 'api/meals#index'
  # I believe ^ that requires a back-end view, which defeats the purpose of SPA
  get '*path' => redirect('/'), constraints: lambda { |req| req.path.exclude? 'rails/active_storage'}
  
end
