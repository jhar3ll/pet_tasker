class PetsController < ApplicationController

  def index
    pets = Pet.all
  
    render json: pets, except: [:created_at, :updated_at]
  end


  def show
    render json: pet, except: [:created_at, :updated_at]
  end


  def create
    pet = Pet.new(pet_params)

    if pet.save
      render json: pet, status: :created, location: pet
    else
      render json: pet.errors, status: :unprocessable_entity
    end
  end

  def destroy
    pet.destroy
  end

  private
    def pet_params
      params.require(:pet).permit(:name, :pet_type, :user_id)
    end
end
