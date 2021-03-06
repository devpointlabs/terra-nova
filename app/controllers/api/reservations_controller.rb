class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:update, :destroy]
  before_action :set_room, only: :create

  def index
    render json: current_user.reservations.all
  end

  def get_reservations
    render json: Reservation.date_range(params[:start_date],params[:end_date], params[:room])
  end

  def show
    render json: current_user.reservation
  end

  def create
    reservation = @room.reservations.new(reservation_params)
    if reservation.save
      render json: reservation
    else
      render json: reservation.errors
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else 
      render json: @reservation.error
    end
  end

  def destroy
    @reservation.destroy
  end

  private
  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def set_room
    @room = Room.find(params[:room_id])
  end

  def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :adults, :children, :first_name, :last_name, :phone, :email)
  end
end
