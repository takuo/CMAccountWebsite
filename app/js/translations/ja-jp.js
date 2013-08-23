// WARNING:  Translations are a work in progress.  This template may change significantly.
// TODO(ctso): Remove this warning when translations have stabilized.
// TODO(ctso): Translate form validation errors.

(function() {
  angular.module('cmaccount.l10n.ja-jp', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('ja-jp', {
      // Generic
      email: "Email",
      password: "パスワード",
      confirm_password: "パスワードの確認",
      logout: "ログアウト",
      continue: "続ける",
      cancel: "キャンセル",
      privacy_policy: "プライバシーポリシー",

      // Top Navigation
      navbar: {
        about: '情報',
        download: 'ダウンロード',
        devices: '端末',
        blog: 'ブログ',
        forum: 'フォーラム',
        community: 'コミュニティ',
        account: 'アカウント'
      },

      // Register Partial
      register: {
        create: "CyanogenMod アカウントを作成する",
        register: "登録",
      },

      // Login Partial
      login: {
        title: "CyanogenMod アカウントにサインイン",
        signin: "サインイン",
        reset_password: "パスワードをリセット",
        no_account: "アカウントがありませんか?",
      },

      // Password Reset Partial
      password_reset: {
        title: "CyanogenMod アカウントのパスワードをリセット",
        reset_password: "パスワードをリセット",
      },

      // Email Verification Partial
      verify_email: {
        title: "email アドレスを確認する",
        must_verify: "CyanogenMod アカウントを使用する前に、あなたのemailアドレスを確認する必要があります。 サインアップした時に、確認用のリンクをあなたのメールアドレスに送信しています。",
        no_longer_valid: "このリンクはすでに無効です",
      },

      // Learn More Partial
      learn_more: {
        learn_more: "もっと知る",

        what_is_cmaccount: {
          title: "CyanogenMod アカウントとはなんですか?",
          text: "CyanogenMod アカウントは、CyanogenModを使用している端末のための付加価値サービス及び機能へのアクセスを提供します。",
        },

        do_i_need: {
          title: "私には CyanogenMod アカウントが必要ですか?",
          text: "あなたの端末でCyanogenModを使用するためにCyanogenMod アカウントを作成する必要はありません。CyanogenMod が提供する \"私の端末を探す\" など特定の機能やサービスへアクセスするためには CyanogenMod アカウントが必要になります。",
        },

        personal_info: {
          title: "どんな個人情報が必要ですか?",
          required: "CyanogenMod アカウントの作成には、email アドレスを含む基本的な情報のみが必要になります。",
          // Note: This string ends with a link to "Privacy Policy"
          // TODO(ctso): Implement a way to safely embed html in the translations.
          usage: "CyanogenMod はあなたの個人情報を外部に販売することはありません。この情報は私たちに従ってのみ使用されます。" ,
        },

        secure: {
          title: "セキュアですか?",
          communication: "あなたのブラウザや端末と私たちのサーバーの間で行われる通信はすべてSSLで暗号化されます。 さらに、あなたのパスワードを平文で私たちのサーバに送信することはありません。",
          priority: "\"私の端末を探す\" と \"リモート消去\" といった機能の性質上、セキュリティは私たちにとってもっとも優先べき事項です。まず、あなたのパスワードで認証をすることなく、端末の場所を確認したり消去したりすることはできません。位置情報を含むあなたの端末間における全ての通信は暗号化され、CyanogenModの全てのサーバ、個人、およびパートナーはこれにアクセすることはできません。",
        },

        benefits: {
          title: "アカウントで得られるものはなんですか?",
          text: "CyanogenMod アカウントを作成して得られるものは、少なくとも、あなたの端末に対する \"私の端末を探す\" と \"リモート消去\" へのアクセスが可能になります。",
        },
      },

      // Devices Partials
      devices: {
        my_devices: "私の端末",

        cyanogenmod_version: "CyanogenMod バージョン",
        android_version: "Android バージョン",
        last_seen: "最終確認",
        date_registered: "登録日",
        carrier: "キャリア",

        locate: "場所",
        locate_device: "端末の場所",

        remote_wipe: "リモート消去",
        remove_device: "端末を削除",
      },

      // Secure Message Partials (find/wipe)
      secure_message: {
        locate_device: "端末の場所",
        authentication_failure: "認証に失敗しました!",
        invalid_password: "入力されたパスワードが不正か、セッションが期限切れになりました",

        enter_password: "あなたの端末を認証するためにパスワードを入力してください。",
        wait_secure_channel: "あなたの端末とのセキュアチャンネルを開始するまでしばらくお待ちください。",
        wait_locate: "あなたの端末の場所を特定している間しばらくお待ちください。",
        wait_wipe: "あなたの端末をリモート消去するまでしばらくお待ちください。",
        wipe_started: "消去は正しく開始されました",
      },

      // Remove Device Partial
      remove_device: {
        problem: "あなたのアカウントから端末を削除する際に問題が発生しました。",
        confirm: "この端末を削除してもよろしいですか?",
        warning_message: "CyanogenMod アカウントから端末を削除すると、場所を特定したりリモート消去する機能は使えなくなります。",
      },
    });
  }]);
}).call(this);
