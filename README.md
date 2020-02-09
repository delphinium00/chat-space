## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e_mail|string|null: false|
|pass_word|string|null: false|

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|

### ## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


