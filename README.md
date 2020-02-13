## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, :name|
|e_mail|string|null: false|
|pass_word|string|null: false|
### Association
- has_many :message
- has_many :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :user

## groups_usersテーブル
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
|message|string|null: false|
|image|string|null|
### Association
- belongs_to :user