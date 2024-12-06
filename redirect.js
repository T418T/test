function redirectToPage() {
    // URLパラメータ "redirect" の値を取得
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirect');

    // 指定されたURLにリダイレクト（検証なし）
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
}

// ページが読み込まれたらリダイレクト
window.onload = redirectToPage;