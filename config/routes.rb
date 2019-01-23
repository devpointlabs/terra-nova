Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get 'get_reservations/:start_date/:end_date/:room', to: 'reservations#get_reservations'
  end

  namespace :api do
    resources :rooms do
      resources :reservations 
    end
  end

    namespace :api do 
      resources :reviews
    end

    get '*other', to: 'static#index'
end
