import { TCardProduct } from '@/data/data'

interface OrderEmailData {
  orderNumber: string
  orderDate: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  items: TCardProduct[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  paymentMethod: string
}

export function generateOrderEmailHTML(data: OrderEmailData): string {
  const itemsHTML = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <strong>${item.name}</strong><br/>
        <span style="color: #6b7280; font-size: 14px;">
          Color: ${item.color} | Size: ${item.size} | Qty: ${item.quantity}
        </span>
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
        $${item.price?.toFixed(2)}
      </td>
    </tr>
  `
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - ${data.orderNumber}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                ✅ Order Confirmed!
              </h1>
              <p style="margin: 10px 0 0 0; color: #d1fae5; font-size: 16px;">
                Thank you for your purchase
              </p>
            </td>
          </tr>

          <!-- Order Info -->
          <tr>
            <td style="padding: 30px;">
              <div style="background-color: #f9fafb; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 30px; border-radius: 8px;">
                <h2 style="margin: 0 0 10px 0; color: #111827; font-size: 20px;">
                  Order #${data.orderNumber}
                </h2>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  Placed on ${data.orderDate}
                </p>
              </div>

              <!-- Customer Details -->
              <h3 style="color: #111827; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                Customer Information
              </h3>
              <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 120px;">Name:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600;">${data.customerName}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Email:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600;">${data.customerEmail}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Phone:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600;">${data.customerPhone}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Payment Method:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600;">${data.paymentMethod}</td>
                </tr>
              </table>

              <!-- Shipping Address -->
              <h3 style="color: #111827; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                Shipping Address
              </h3>
              <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0 0 30px 0;">
                ${data.shippingAddress.street}<br/>
                ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postalCode}<br/>
                ${data.shippingAddress.country}
              </p>

              <!-- Order Items -->
              <h3 style="color: #111827; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                Order Items
              </h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                ${itemsHTML}
              </table>

              <!-- Order Summary -->
              <table width="100%" cellpadding="8" cellspacing="0" style="margin-top: 20px; border-top: 2px solid #e5e7eb;">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; text-align: right; padding-right: 20px;">Subtotal:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600; text-align: right; width: 100px;">
                    $${data.subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; text-align: right; padding-right: 20px;">Shipping:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600; text-align: right;">
                    $${data.shipping.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; text-align: right; padding-right: 20px;">Tax:</td>
                  <td style="color: #111827; font-size: 14px; font-weight: 600; text-align: right;">
                    $${data.tax.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td style="color: #111827; font-size: 18px; font-weight: 700; text-align: right; padding: 15px 20px 0 0; border-top: 2px solid #10b981;">
                    Total:
                  </td>
                  <td style="color: #10b981; font-size: 20px; font-weight: 700; text-align: right; padding-top: 15px; border-top: 2px solid #10b981;">
                    $${data.total.toFixed(2)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                Questions about your order? Contact us at <a href="mailto:support@example.com" style="color: #10b981; text-decoration: none;">support@example.com</a>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Your Store. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}
