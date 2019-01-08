class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.date :Start_date
      t.date :End_date
      t.integer :Room_id
      t.integer :Adults
      t.integer :Children
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
