Rails.application.routes.draw do
  resources :stocks, only: [:index, :show], param: :symbol
end
