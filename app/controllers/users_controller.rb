class UsersController < ApplicationController
  
  def index
    users = User.all
    render json: users, only: [:id, :username]
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user, only: [:id, :username]
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end


  def destroy
    user.destroy
  end

  private
    def user_params
      params.require(:user).permit(:username)
    end
end
