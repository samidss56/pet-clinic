<!DOCTYPE html>
<html>
<head>
    <title>Laporan Transaksi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1, p {
            margin-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
            font-size: 12px; /* Reduced text size */
        }
        th {
            background-color: #f2f2f2;
        }
        .product-row {
            background-color: #f9f9f9;
        }
        .transaction-row {
            background-color: #e9e9e9;
        }
        .section-heading {
            font-size: 14px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Laporan Transaksi</h1>
    <p><strong>Dari:</strong> {{ $startDate }} <strong>Sampai:</strong> {{ $endDate }}</p>
    <div class="section-heading" style="margin-bottom: 3px">Ringkasan Transaksi</div>
    <table>
        <thead>
            <tr>
                <th>ID Transaksi</th>
                <th>Invoice</th>
                <th>User ID</th>
                <th>Status Pembayaran</th>
                <th>Tanggal Transaksi</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            @foreach($transactions as $transaction)
                <tr class="transaction-row">
                    <td>{{ $transaction->id }}</td>
                    <td>{{ $transaction->invoice }}</td>
                    <td>{{ $transaction->user_id }}</td>
                    <td>{{ $transaction->status_payment }}</td>
                    <td>{{ date('d-m-Y', strtotime($transaction->date_transaction)) }}</td>
                    <td>{{ number_format($transaction->subtotal, 0, ',', '.') }}</td>
                </tr>
                {{-- <tr>
                    <td colspan="6">
                        <div class="section-heading" style="margin-bottom: 3px">Detail User</div>
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
                                @foreach($transactions->user as $user)
                                    <tr class="product-row">
                                        <td>{{ $user->user_id }}</td>
                                        <td>{{ $user->name }}</td>
                                        <td>{{ $user->email }}</td>
                                        <td>{{ $user->no_telp }}</td>
                                        <td>{{ $user->alamat }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </td>
                </tr> --}}
                <tr>
                    <td colspan="6">
                        <div class="section-heading" style="margin-bottom: 3px">Detail Produk</div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nama Produk</th>
                                    <th>Quantity</th>
                                    <th>Harga Produk</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($transactions->details as $detail)
                                    <tr class="product-row">
                                        <td>{{ $detail->product->name_product}}</td>
                                        <td>{{ $detail->quantity }}</td>
                                        <td>{{ number_format($detail->harga_product, 0, ',', '.') }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
