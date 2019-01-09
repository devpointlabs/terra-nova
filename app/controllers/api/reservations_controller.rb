class Api::ReservationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user
  before_action :set_reservation, only: [:update, :destroy]

  def index
    render json: @user.reservations.all
  end

  def show
    render json: @user.reservation
  end

  def create
    reservation = @user.reservations.new(reservation_params)
    if reservation.save
      render json: reservation
    else
      render json: reservation.error
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else 
      render json: @reservation.error
  end

  def destroy
    @reservation.destroy
  end

  private
  def set_user
    @user = User.find(params[:user_id])
  end

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :room_id, :adults, :children)
  end
end
