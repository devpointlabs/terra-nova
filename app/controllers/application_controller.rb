require 'rails/application_controller'

class ApplicationController < Rails::ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  # layout false

  def index
    render file: Rails.root.join('public', 'index.html')
  end

protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_up, 
      keys: [:first_name, :last_name,]
      )
  end

end
