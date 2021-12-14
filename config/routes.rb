Rails.application.routes.draw do
  resources :subscriptions
  resources :comments
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users
    root "events#index"

    resources :events do
      resources :comments, only: [:create, :destroy]
      resources :subscriptions, only: [:create, :destroy]
    end

    resources :users, only: [:show, :edit, :update]
  end
end
