import React, { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setTransactions([
        { id: 1, amount: 50, date: '2025-05-01' },
        { id: 2, amount: 120, date: '2025-04-21' },
        { id: 3, amount: 75, date: '2025-03-15' },
      ]);
      setLoading(false);
    }, 1000); // 1 second delay to simulate loading
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      {loading ? (
        <p>Loading transactions...</p>
      ) : (
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id}>
              ${tx.amount} - {tx.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
