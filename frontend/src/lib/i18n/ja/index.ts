import type { BaseTranslation } from '../i18n-types';

const ja = {
	home: {
		page_title: 'ホーム',
		order_groups: 'グループ',
		order_name: '名前',
		order_ip: 'IP',
		order_tooltip: '順序',
		no_devices: 'デバイスがありません',
		add_first_device: '最初のデバイスを追加してください',
		grant_permissions:
			'既存のデバイスへの権限を付与するか、新しいデバイスを作成するために管理者に依頼してください。'
	},
	account: {
		page_title: 'アカウント',
		account_type_admin: '管理者',
		account_type_user: 'ユーザー',
		avatar_title: 'アバター',
		language_title: '言語',
		language_option_auto: '自動',
		change_password_title: 'パスワード変更',
		change_password_body: 'パスワードを変更すると、再度ログインする必要があります。',
		change_password_label: '現在のパスワード',
		change_password_new: '新しいパスワード',
		change_password_confirm: 'パスワードの確認'
	},
	device: {
		page_title: '新しいデバイス',
		tabs: ['手動', 'ネットワークスキャン'],
		card_btn_more: '詳細',
		card_btn_more_edit: '編集',
		card_btn_more_sleep: 'スリープ',
		card_btn_more_reboot: '再起動',
		card_tooltip_wake_cron: '起動スケジュール',
		card_tooltip_shutdown_cron: 'シャットダウンスケジュール',
		card_tooltip_wake_password: '起動パスワード',
		card_tooltip_last_status_change: '最終ステータス変更',
		card_password: 'パスワード',
		card_nic_tooltip_pending: '保留中',
		card_nic_tooltip_shutdown: 'シャットダウン済み',
		card_nic_tooltip_shutdown_no_cmd: 'シャットダウンコマンドが設定されていません',
		card_nic_tooltip_shutdown_no_permission: 'このデバイスをシャットダウンする権限がありません',
		card_nic_tooltip_power: '電源オン',
		card_nic_tooltip_power_no_permission: 'このデバイスの電源をオンにする権限がありません',
		modal_confirm_wake_title: '{device} を起動しますか？',
		modal_confirm_wake_desc: '{device} を起動することを確認してください。',
		modal_confirm_shutdown_title: '{device} をシャットダウンしますか？',
		modal_confirm_shutdown_desc: '{device} をシャットダウンすることを確認してください。',
		general: '一般',
		general_name: '名前',
		general_name_placeholder: 'デバイス名',
		general_ip: 'IP',
		general_mac: 'Mac',
		general_netmask: 'ネットマスク',
		general_required_field: '必須項目',
		ports: 'ポート',
		ports_desc: 'UpSnap は指定されたポートが開いているか確認することもできます。',
		ports_add_new: '新しいポートを追加',
		ports_name: '名前',
		ports_number: '番号',
		link: 'リンク',
		link_desc:
			'デバイス名をクリック可能なリンクにします。たとえばダッシュボードへのリンクに最適です。',
		ping: 'Ping',
		ping_desc:
			'デバイスがオンになっているか確認するためにカスタムシェルコマンドを使用できます。このコマンドは、デバイスがオンであることを示すには終了コード <span class="badge">0</span> を返す必要があります。その他の終了コードはオフとして扱われます。',
		ping_cmd: 'カスタム Ping コマンド',
		wake: '起動',
		wake_desc: 'スケジュールされた cron ジョブを使用してこのデバイスを起動できます。',
		wake_cmd: 'カスタム起動コマンド',
		wake_cron: '起動スケジュール',
		wake_cron_enable: '起動スケジュールを有効化',
		sol: 'Sleep-On-LAN',
		sol_desc1:
			'<a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a> ツールを使用してコンピュータをスリープ状態にすることができます。Sleep-On-LAN（SOL）は、スリープ状態にしたい PC で動作する外部ツール/デーモンで、REST エンドポイントを提供します。Sleep-On-LAN のセットアップ方法については、<a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank">Usage</a> セクションを参照してください。',
		sol_desc2:
			'SOL は、認証を有効にし、要求をより信頼性の高いものにするために、UDP の代わりに HTTP を使用してリクエストを送信するように構成されています。',
		sol_desc3:
			'したがって、<a href="https://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">SOL 構成</a>の <span class="badge">Listeners</span> セクションに <span class="badge">HTTP:&lt;YOURPORT&gt;</span> を含めるようにしてください。',
		sol_enable: 'Sleep-On-LAN を有効化',
		sol_port: 'SOL ポート',
		sol_authorization: '認証',
		sol_user: 'SOL ユーザー',
		sol_password: 'SOL パスワード',
		shutdown: 'シャットダウン',
		shutdown_desc:
			'この <strong>シェルコマンド</strong> は、コンテナ内（Docker を使用している場合）またはホスト（バイナリを使用している場合）で実行されます。機能を確認するには、まずコマンドをコンテナ内またはホストのシェルで実行してください。一般的なコマンドには、Windows 用の <span class="badge">net rpc</span>、Linux 用の <span class="badge">sshpass</span>、またはウェブリクエストを行うための <span class="badge">curl</span> などがあります。',
		shutdown_examples: '例:',
		shutdown_examples_windows: 'リモート Windows マシンのシャットダウン:',
		shutdown_examples_linux: 'リモート Linux マシンのシャットダウン:',
		shutdown_cmd: 'シャットダウンコマンド',
		shutdown_cron_desc:
			'デバイスを起動するために cron を設定するのと同様に、このデバイスをシャットダウンするための cron ジョブをスケジュールすることもできます。',
		shutdown_cron: 'シャットダウンスケジュール',
		shutdown_cron_enable: 'シャットダウンスケジュールを有効化',
		password: 'パスワード',
		password_desc:
			'一部のネットワークカードには、マジックパケット用のパスワード（<span class="badge">SecureON</span> とも呼ばれる）を設定するオプションがあります。パスワードは 0、4、または 6 文字のみの長さである必要があります。',
		groups: 'グループ',
		groups_desc:
			'デバイスをグループに追加することで、ダッシュボード上でグループごとに並べ替えることができます。',
		groups_placeholder: "例: '自宅' や 'オフィス' など",
		network_scan_range_saved: 'スキャン範囲が保存されました',
		network_scan_desc:
			'ネットワーク上のデバイスを自動的にスキャンします。この機能を使用するには、UpSnap を root/admin 権限で実行し、nmap が $PATH にインストールされて利用可能である必要があります（Docker ユーザーの場合、すでに設定済みで何もする必要はありません）。スキャンには数秒かかる場合があります。',
		network_scan_ip_range: 'IP 範囲',
		network_scan_no_range: 'スキャン範囲なし',
		network_scan_unsaved_changes: '未保存の変更',
		network_scan_running: 'スキャン実行中',
		network_scan: 'スキャン',
		network_scan_ip: 'IP:',
		network_scan_mac: 'Mac:',
		network_scan_mac_vendor: 'Mac ベンダー:',
		network_scan_netmask: 'ネットマスク:',
		network_scan_add_all: 'すべてのデバイスを追加',
		network_scan_replace_netmask: 'すべてのデバイスのネットマスクを置き換えますか？',
		network_scan_new_netmask: '新しいネットマスク',
		network_scan_include_unknown: '名前が「Unknown」のデバイスを含める',
		require_confirmation: '確認を要求'
	},
	login: {
		welcome: 'ようこそ',
		email_label: 'メールアドレスまたはユーザー名:',
		password_label: 'パスワード:',
		btn_more: '詳細',
		menu_title_auth_providers: '他の認証プロバイダー',
		btn_login: 'ログイン'
	},
	settings: {
		page_title: '設定',
		ping_interval_title: 'Ping 間隔',
		ping_interval_desc1:
			'デバイスが ping される間隔を設定します。空白の場合、デフォルト値 <span class="badge">@every 3s</span> が使用されます。',
		ping_interval_desc2:
			'cron の正しい構文については、<a class="link" href="https://en.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> または <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">パッケージドキュメント</a> を参照してください。',
		lazy_ping_title: 'Lazy ping',
		lazy_ping_desc:
			'Lazy ping をオンにすると、UpSnap はアクティブなユーザーがウェブサイトを訪れている場合にのみデバイスを ping します。オフの場合、UpSnap は常にデバイスを ping します。',
		lazy_ping_enable: '有効化',
		website_title_title: 'ウェブサイトタイトル',
		website_title_desc: 'ウェブサイトおよびブラウザタブのタイトルを設定します。',
		icon_title: 'アイコン',
		icon_desc: 'カスタムファビコンを設定します。サポートされているファイルタイプ:',
		upsnap_version: 'UpSnap バージョン'
	},
	users: {
		page_title: 'ユーザー',
		allow_create_devices:
			'{username} が新しいデバイスを作成し、デバイスグループを編集できるようにする',
		device_permissions: 'デバイスの権限',
		create_new_device: '新しいデバイスを作成',
		read: '読み取り',
		update: '更新',
		delete: '削除',
		power: '電源',
		toggle: '切り替え',
		confirm_delete_title: '削除の確認',
		confirm_delete_desc: '{username} を削除してもよろしいですか？',
		create_new_user: '新しいユーザーを作成',
		username: 'ユーザー名',
		password: 'パスワード',
		password_confirm: 'パスワードの確認',
		required_field: '必須項目'
	},
	buttons: {
		save: '保存',
		delete: '削除',
		change: '変更',
		reset: 'リセット',
		cancel: 'キャンセル',
		add: '追加',
		confirm: '確認'
	},
	welcome: {
		step1_page_title: 'UpSnap へようこそ 🥳',
		step1_setup_desc: 'セットアップを完了するには、以下の手順を完了してください。',
		step1_setup_btn_next: '次へ',
		step2_page_title: '管理者アカウントを作成',
		step2_label_email: 'メールアドレス:',
		step2_label_password: 'パスワード:',
		step2_label_min_chars: '最小 10 文字',
		step2_label_password_confirm: 'パスワードの確認:',
		step2_btn_create: '作成',
		step3_page_title: '準備完了です！ 🎉',
		step3_page_desc: 'ダッシュボードにデバイスを追加してください。',
		step3_btn_done: '始めましょう！',
		not_expected_title: 'ここにいるとは思いませんでした！ 🧐',
		not_expected_desc: 'セットアップはすでに完了しています！やるべきことはありません。',
		not_expected_back: '戻る',
		progress_step1: 'ようこそ',
		progress_step2: 'アカウント作成',
		progress_step3: '完了'
	},
	toasts: {
		admin_saved: '管理者を保存しました',
		user_saved: 'ユーザーを保存しました',
		user_created: 'ユーザー {username} を作成しました',
		user_deleted: 'ユーザー {username} を削除しました',
		settings_saved: '設定を保存しました',
		password_changed: 'パスワードが変更されました。再度ログインしてください。',
		passwords_missmatch: 'パスワードが一致しません',
		permissions_created: '{username} の権限を作成しました',
		permissions_deleted: '{username} の権限を削除しました',
		permissions_updated: '{username} の権限を更新しました',
		permissions_updated_personal: 'あなたの権限が更新されました',
		no_permission: '{url} へのアクセス権がありません',
		device_created: '{device} を作成しました',
		devices_created_multiple: '{count|int} 台のデバイスを作成しました',
		device_updated: '{device} を更新しました',
		device_deleted: '{device} を削除しました',
		group_created: 'グループ {group} を作成しました',
		group_deleted: 'グループ {group} を削除しました'
	},
	navbar: {
		theme: 'テーマ',
		new: '新規',
		edit_account: 'アカウント編集',
		logout: 'ログアウト'
	}
} satisfies BaseTranslation;

export default ja;
