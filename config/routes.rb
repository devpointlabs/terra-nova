Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    mount_devise_token_auth_for 'User', at: 'api/auth'
  end
end
