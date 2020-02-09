## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, :name|
|e_mail|string|null: false|
|pass_word|string|null: false|
### Association
- has_many :messages
- has_many :groups

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### ## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


