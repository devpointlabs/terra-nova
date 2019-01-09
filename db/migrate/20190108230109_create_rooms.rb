class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.float :cost
      t.integer :max_occupancy
      t.belongs_to :reservation, foreign_key: true

      t.timestamps
    end
  end
end
