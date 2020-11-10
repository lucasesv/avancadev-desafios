import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface RequestData {
  coupon: string;
}

interface CouponValidation {
  status: string;
}

const vipCoupons = ['vip1', 'vip2'];

app.post('/', (req: Request, res: Response) => {

  const responseData: CouponValidation = { status: 'invalid coupon' };
  
  const couponData = req.body as RequestData;
  vipCoupons.forEach(coupon => {
    if (coupon === couponData.coupon) {
      responseData.status = 'valid vip';
    }
  });

  res.json(responseData);
});

app.listen(3003);