class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :Room_type
      t.float :Cost
      t.integer :Max_occupancy
      t.belongs_to :reservation, foreign_key: true

      t.timestamps
    end
  end
end
