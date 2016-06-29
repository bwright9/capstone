class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :current_city
      t.string :current_state
      t.string :current_neighborhood
      t.integer :current_zipcode
      t.integer :age
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
