import TransactionTable from "./TransactionTable";

export default function Transactions () {
    const data = [
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Pending",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Pending",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
        {
          name: "Web development with PHP and Laravel",
          time: "20 January 2024",
          status: "Success",
          payMethod: "Bkash",
          amount: 10.000
        },
      ];

      const itemsPerPage = 4;
    return (
        <div className="my-16">
        <TransactionTable data={data} itemsPerPage={itemsPerPage} />
        </div>
    )
}