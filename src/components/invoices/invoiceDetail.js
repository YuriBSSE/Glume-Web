import React, { useEffect, useState } from "react";
import arrowImage from "../../assets/arrow-left-purple.png"
import { useParams,Link } from "react-router-dom"
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Skeleton from '../../reUsableComponent/skeleton';
import {CgArrowRightO} from "react-icons/cg"
import formatDate from "../../utils/formatDate";
import {api} from "../../config/config..json"
import getCycleDura from "../../utils/getCyleDura";

function InvoiceDetail({getInvoiceDetail,invoiceDetail }) {

    const [loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(()=>{
        getInvoiceDetail(id).then(()=>setLoading(false))
    },[])

    if(loading){
		return <Skeleton/>
	}else{
		return (
            <>
            <header className="centering for-inner">
                <div className="go-back">
                    <Link to="/head/invoices">
                        <p><span><img src={arrowImage}/></span> Back</p>
                    </Link>
                </div>
            </header>
            <main>
            <div class="page-content container">
    <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                ID: #{invoiceDetail.transId}
            </small>
        </h1>

        <div class="page-tools">
            {/* <div class="action-buttons">
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                    <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Print
                </a>
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                    <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Export
                </a>
            </div> */}
        </div>
    </div>

    <div class="container px-0">
        <div class="row mt-4">
            <div class="col-12 col-lg-10 offset-lg-1">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <i class="fa fa-book fa-2x mr-1" style={{color:'#5055be'}}></i>
                            <span class="text-default-d3">Glume.com</span>
                        </div>
                    </div>
                </div>

                <hr class="row brc-default-l1 mx-n1 mb-4" />

                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-sm text-grey-m2 align-middle">To:</span>
                            <span class="text-600 text-110 text-blue align-middle">{invoiceDetail.user.first_name+" "+invoiceDetail.user.last_name}</span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                                {invoiceDetail.user.email}
                            </div>
                            <div class="my-1">
                               {invoiceDetail.user.address}
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">{invoiceDetail.user.number}</b></div>
                        </div>
                    </div>

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                            <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Invoice
                            </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #{invoiceDetail.transId}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> {formatDate(new Date(invoiceDetail.created_at))}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-success badge-pill px-25" style={{color:'white'}}>Paid</span></div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">

                    <div class="row border-b-2 brc-default-l2"></div>
            <div class="table-responsive">
                <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                    <thead class="bg-none bgc-default-tp1">
                        <tr class="text-white">
                            <th class="opacity-2">#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th width="140">Amount</th>
                        </tr>
                    </thead>

                    <tbody class="text-95 text-secondary-d3">
                        <tr></tr>
                        <tr>
                            <td>1</td>
                            <td>{invoiceDetail.project.name}</td>
                            <td>1</td>
                            <td class="text-95">${invoiceDetail.amount}</td>
                            <td class="text-secondary-d2">${invoiceDetail.amount}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>

                    <div class="row mt-3">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>

                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Amount
                                </div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">${invoiceDetail.amount}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <p>Remaing Amount: ${invoiceDetail.remainingPrice}</p>
                </div>
            </div>
        </div>
    </div>
</div>
            </main>
            </>
		);
	}
}

function mapStateToProps({invoiceDetail}){
    return {invoiceDetail}
}

export default connect(mapStateToProps, actions)(InvoiceDetail);