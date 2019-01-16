class Api::RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]

  def index
    render json: Room.all
  end

  def show
    render json: @room
  end

  def create
    room = Room.new(room_params)
    if room.save
      render json: room
    else
      render json: room.error
    end
  end

  def update
    if @room.update(room_params)
      render json: @room
    else 
      render json: @room.error
    end
  end

  def destroy
    @room.destroy
  end

  private
  def set_room
    @room = Room.find(params[:id])
  end

  def room_params
      params.require(:room).permit(:room_type, :cost, :max_occupancy)
  end
end