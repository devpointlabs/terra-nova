class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def welcome_email(user)
    @user = user
    # @url = 'Our domain name with login info'
    mail(to: @user.email, subject: 'Welcome to Terra Nova Cabins!')
  end

  def reservation_email(user)
    @user = user
    mail(to: @user.email, subject: 'Your Reservation with Terra Nova Cabins')
end
