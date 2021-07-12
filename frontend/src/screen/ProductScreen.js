import React from 'react'
import {Link} from 'react-router-dom'
// 为了可以实现跳转到首先
import {Row , Col , Image , ListGroup , Card , Button} from 'react-bootstrap'
// 行 列 图片 包裹作为项目项 Card表格 按钮
import products from '../poducts'

const ProductScreen = () => {
    return (
        <>
            <Link className='btn btn-dark rounded my-3' to='/' >
                返回首页
            </Link>
            <Row>
                <Col md={6}>

                </Col>
                <Col md={3}></Col>
                <Col md={3}></Col>
            </Row>
        </>
    )
}

export default ProductScreen
