class Api::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: Review.all
  end

  def show
    render json: @review
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: review.error
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else 
      render json: @review.error
    end
  end

  def destroy
    @review.destroy
  end

  private
  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:rating, :title, :body)
  end
end
