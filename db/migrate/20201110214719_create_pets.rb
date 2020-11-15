class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :pet_type
      
      t.belongs_to :user
      t.timestamps
    end
  end
end
