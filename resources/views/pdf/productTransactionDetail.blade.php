<!DOCTYPE html>
<html>

<head>
    <title>Transaction Detail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            color: #333;
        }

        h2 {
            color: #2c3e50;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 5px;
            margin-bottom: 20px;
        }

        h3 {
            color: #16a085;
            margin-top: 20px;
            border-bottom: 1px solid #16a085;
            padding-bottom: 5px;
        }

        p {
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table,
        th,
        td {
            border: 1px solid #ddd;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        .transaction-info {
            margin-bottom: 20px;
        }

        .transaction-info p {
            font-size: 14px;
            margin: 5px 0;
        }

        .subtotal {
            font-size: 18px;
            font-weight: bold;
            color: #e74c3c;
            text-align: right;
        }
    </style>
</head>

<body>
    <h2>Invoice #{{ $transaction->invoice }}</h2>
    <div class="transaction-info">
        <p><strong>Date:</strong> {{ $transaction->date_transaction }}</p>
        <p><strong>Status:</strong> {{ $transaction->status_payment == 'settlement' ? 'Selesai' : 'Belum Dibayar' }}</p>
    </div>

    <!-- User Details -->
    <h3>User Details</h3>
    <table>
        <thead>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>No Telp</th>
                <th>Alamat</th>
            </tr>
        </thead>
        <tbody>
            @if ($transaction->user)
                <tr>
                    <td>{{ $transaction->user->user_id }}</td>
                    <td>{{ $transaction->user->name }}</td>
                    <td>{{ $transaction->user->email }}</td>
                    <td>{{ $transaction->user->no_telp }}</td>
                    <td>{{ $transaction->user->alamat}}</td>
                </tr>
            @else
                <tr>
                    <td colspan="5">No user found</td>
                </tr>
            @endif
        </tbody>
    </table>

    <!-- Products -->
    <h3>Products</h3>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($transaction->details->whereNotNull('product_id') as $product)
                <tr>
                    <td>{{ $product->product_id }}</td>
                    <td>{{ $product->product->name_product }}</td>
                    <td>{{ $product->quantity }}</td>
                    <td>{{ number_format($product->harga_product, 0, ',', '.') }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Subtotal -->
    <p class="subtotal">Subtotal: {{ number_format($transaction->subtotal, 0, ',', '.') }}</p>

</body>

</html>
