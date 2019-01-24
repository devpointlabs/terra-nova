class Api::MailersController < ApplicationController
 

  def index
    render json: Mailer.all
  end

  def create
    mailer = Mailer.new(mailer_params)
    if mailer.save
      render json: mailer
    else
      render json: mailer.error
    end
  end

private

  def set_mailer
    @mailer = Mailer.find(params[:id])
  end

  def mailer_params
    params.require(:mailer).permit(:email)
  end
end
