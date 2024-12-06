<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XSS Vulnerability Example</title>
</head>
<body>
    <h1>検索結果</h1>
    <form method="GET">
        <label for="query">検索:</label>
        <input type="text" id="query" name="query">
        <button type="submit">送信</button>
    </form>

    <p>あなたの検索クエリ: <span id="result">
        <!-- 入力をそのまま表示 -->
        <?php echo $_GET['query'] ?? ''; ?>
    </span></p>
</body>
</html>