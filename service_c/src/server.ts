import express, { Request, Response } from 'express';
import cors from 'cors';
import got from 'got';


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

const validCoupons = ['abc', 'xyz'];

app.post('/', async (req: Request, res: Response) => {
  
  const validationResult: CouponValidation = { status: 'invalid coupon' };
  
  const couponData: RequestData = req.body as RequestData;
  validCoupons.forEach(coupon => {
    if (coupon === couponData.coupon) {
      validationResult.status = 'valid';
    }
  });

  const {body} = await got.post<CouponValidation>('http://srvd:3003', {
    json: couponData,
    responseType: 'json',
    retry: {
      limit: 5,
      methods: ['POST']
    }
  });

  if (body.status === 'valid vip') {
    validationResult.status = body.status;
  }

  res.json(validationResult);
});

app.listen(3002);