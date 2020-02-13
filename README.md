## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, :name|
|e_mail|string|null: false|
|pass_word|string|null: false|
### Association
- has_many :group, through: group_users
- has_many :messages
- has_many :group_users

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, through: group_users
- has_many :messages
- has_many :group_users

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|t.references|null: false, foreign_key: true|
|group|t.references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|image|string|null|
|user|t.references|null: false, foreign_key: true|
|group|t.references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group