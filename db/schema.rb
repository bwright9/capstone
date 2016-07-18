# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160718213232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "move_preferences", force: :cascade do |t|
    t.boolean  "rent"
    t.boolean  "buy"
    t.integer  "housing_costs"
    t.boolean  "school_ratings"
    t.integer  "median_age"
    t.boolean  "safety"
    t.boolean  "restaurants"
    t.boolean  "arts_culture"
    t.boolean  "shopping"
    t.boolean  "parks_nature"
    t.boolean  "nightlife"
    t.boolean  "walk_score"
    t.integer  "profile_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "move_preferences", ["profile_id"], name: "index_move_preferences_on_profile_id", using: :btree

  create_table "profiles", force: :cascade do |t|
    t.string   "current_city"
    t.string   "current_state"
    t.string   "current_neighborhood"
    t.integer  "current_zipcode"
    t.integer  "age"
    t.integer  "user_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "walkscore"
  end

  add_index "profiles", ["user_id"], name: "index_profiles_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "first_name",                          null: false
    t.string   "last_name",                           null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "api_key"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "visit_preferences", force: :cascade do |t|
    t.boolean  "nightlife"
    t.boolean  "safety"
    t.boolean  "restaurants"
    t.boolean  "arts_culture"
    t.boolean  "shopping"
    t.boolean  "parks_nature"
    t.boolean  "walk_score"
    t.integer  "profile_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.boolean  "food",         default: false
    t.boolean  "drinks",       default: false
    t.boolean  "coffee",       default: false
    t.boolean  "shops",        default: false
    t.boolean  "arts",         default: false
    t.boolean  "outdoors",     default: false
    t.boolean  "sights",       default: false
  end

  add_index "visit_preferences", ["profile_id"], name: "index_visit_preferences_on_profile_id", using: :btree

  add_foreign_key "move_preferences", "profiles"
  add_foreign_key "profiles", "users"
  add_foreign_key "visit_preferences", "profiles"
end
