Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: :update
  end

  namespace :api do
    resources :rooms do
      resources :reservations 
    end
  end

    namespace :api do 
      resources :reviews
    end
end
