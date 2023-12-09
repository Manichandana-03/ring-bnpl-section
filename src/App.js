import { RxCross1 } from "react-icons/rx";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import './App.css'

const App =()=>{
  return(
    <div className="main-container">
      <div className="header">
        <h1>BNPL Bill Details</h1>
        <RxCross1 className="cross-mark" />
      </div>
      <div className='light-background'>
      <div className="bill-container">
        <button>Dec 2021 Bill</button>
      </div>
      <div className="table-wrapper">
      <table >
        
        <tr>
          <th>Laterpay Total Bill Amount</th>
          <th>From</th>
          <th>To</th>
          <th>Payment Due</th>
          <th>Transaction Charges</th>
          <th>Total Dues</th>
          <th>DPO</th>
        </tr>
        
      
        <tr>
          <td><span className="alignment"><MdOutlineCurrencyRupee/>360.5</span></td>
          <td>1st December 21</td>
          <td>31st December 21</td>
          <td>5th January 21</td>
          <td><span className="alignment"><MdOutlineCurrencyRupee/>10.5</span></td>
          <td><span className="alignment"><MdOutlineCurrencyRupee/>0</span></td>
          <td>6</td>
        </tr>
        
      </table>
      </div>
      <div className="bill-container container-margin">
        <button>Transaction History</button>
        <button>Dues</button>
      </div>
      <div>
        <h3 className="heading">Transaction Details</h3>
        <div className="table-wrapper">
        <table>
          <thead>
        <tr>
          <th>Merchant</th>
          <th>Transaction Id</th>
          <th>Amount</th>
          <th>Transaction Type</th>
          <th>Repayment Status</th>
          <th>Transaction Status</th>
          <th>Transaction Date</th>
          <th>Mapping</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Nikunj Dhimar Bank Transfer Test</td>
          <td>BNPL4681768793335812</td>
          <td><span className="alignment"><MdOutlineCurrencyRupee/>150</span></td>
          <td>repayment</td>
          <td><span className="not-paid">NOT_PAID</span></td>
          <td><span className="in-progress">In Process</span></td>
          <td>29th December 2021,4:51:37 Pm</td>
          <td><span className="alignment blue-bg"><FaEye/>Mapping</span></td>
        </tr>
        </tbody>
      </table>
      </div>
      <div className="table-wrapper">
      <table>
        <thead>
        <tr>
          <th>Merchant</th>
          <th>Transaction Id</th>
          <th>Amount</th>
          <th>Transaction Type</th>
          <th>Repayment Status</th>
          <th>Transaction Status</th>
          <th>Transaction Date</th>
          <th>Mapping</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Fastag</td>
          <td>BNPL1386837514567129</td>
          <td><span className="alignment"><MdOutlineCurrencyRupee/>200</span></td>
          <td>repayment</td>
          <td><span className="not-paid">NOT_PAID</span></td>
          <td><span className="in-progress">In Process</span></td>
          <td>7th December 2021, 6:59:31 Pm</td>
          <td><span className="alignment blue-bg"><FaEye/>Mapping</span></td>
        </tr>
        </tbody> 
      </table>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default App