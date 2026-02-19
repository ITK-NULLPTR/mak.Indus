'use client'

import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonThird from '@/shared/Button/ButtonThird'
import { Checkbox, CheckboxField } from '@/shared/checkbox'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/shared/fieldset'
import { Subheading } from '@/shared/heading'
import { Input } from '@/shared/input'
import { Radio, RadioField, RadioGroup } from '@/shared/radio'
import { Select } from '@/shared/select'
import {
  CreditCardIcon,
  CreditCardPosIcon,
  InternetIcon,
  Route02Icon,
  Tick02Icon,
  UserCircle02Icon,
  Wallet03Icon,
  Money03Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { useCheckout } from './CheckoutContext'

const Information = () => {
  const [tabActive, setTabActive] = useState<'ContactInfo' | 'ShippingAddress'>('ShippingAddress')
  const { data } = useCheckout()

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id)
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div id="ContactInfo" className="scroll-mt-5 rounded-xl border">
        <TabHeader
          title="Contact information"
          icon={UserCircle02Icon}
          value={data.contactInfo.email ? `${data.contactInfo.email} / ${data.contactInfo.phone}` : 'Enter contact info'}
          onClickChange={() => {
            setTabActive('ContactInfo')
            handleScrollToEl('ContactInfo')
          }}
        />
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ContactInfo' && 'invisible hidden')}>
          <ContactInfo
            onClose={() => {
              setTabActive('ShippingAddress')
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div>
      </div>

      <div id="ShippingAddress" className="scroll-mt-5 rounded-xl border">
        <TabHeader
          title="Shipping address"
          icon={Route02Icon}
          value={data.shippingAddress.address ? `${data.shippingAddress.address}, ${data.shippingAddress.city}` : 'Enter shipping address'}
          onClickChange={() => {
            setTabActive('ShippingAddress')
            handleScrollToEl('ShippingAddress')
          }}
        />
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ShippingAddress' && 'invisible hidden')}>
          <ShippingAddress
            onClose={() => {
              // Now we just stay on this tab or focus on the summary/payout
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div>
      </div>
    </div>
  )
}

const TabHeader = ({
  title,
  icon,
  value,
  onClickChange,
}: {
  title: string
  icon: IconSvgElement
  value: string
  onClickChange: () => void
}) => {
  return (
    <div className="flex flex-col items-start gap-5 p-5 sm:flex-row sm:p-6">
      <HugeiconsIcon icon={icon} size={24} className="sm:mt-1.5" />
      <div className="sm:pl-3">
        <h3 className="flex items-center gap-3 text-neutral-700 dark:text-neutral-400">
          <span className="tracking-tight uppercase">{title}</span>
          <HugeiconsIcon icon={Tick02Icon} size={24} className="mb-1 text-primary-500" />
        </h3>
        <div className="mt-1 text-sm font-semibold">{value}</div>
      </div>
      <button
        className="rounded-lg bg-neutral-50 px-4 py-2 text-sm font-medium hover:bg-neutral-100 sm:ml-auto dark:bg-neutral-800 dark:hover:bg-neutral-700"
        onClick={onClickChange}
        type="button"
      >
        Change
      </button>
    </div>
  )
}

const ContactInfo = ({ onClose }: { onClose: () => void }) => {
  const { updateContactInfo, data } = useCheckout()

  return (
    <form
      action="#"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        updateContactInfo({
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
        })
        onClose()
      }}
    >
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Contact infomation</h3>
            <p className="text-sm">
              Do not have an account?{` `}
              <Link href="/login" className="font-medium underline">
                Log in
              </Link>
            </p>
          </div>
          <Field className="max-w-lg">
            <Label>Your phone number</Label>
            <Input defaultValue={data.contactInfo.phone || '+808 xxx'} type="tel" name="phone" required />
          </Field>
          <Field className="max-w-lg">
            <Label>Email address</Label>
            <Input defaultValue={data.contactInfo.email} type="email" name="email" required />
          </Field>
          <Field>
            <CheckboxField>
              <Checkbox name="newsletter" defaultChecked />
              <Label>Email me news and offers</Label>
            </CheckboxField>
          </Field>

          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <ButtonPrimary type="submit">Next to shipping address</ButtonPrimary>
            <ButtonThird type="button" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

const ShippingAddress = ({ onClose }: { onClose: () => void }) => {
  const { updateShippingAddress, data } = useCheckout()

  return (
    <form
      action="#"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        updateShippingAddress({
          firstName: formData.get('first-name') as string,
          lastName: formData.get('last-name') as string,
          address: formData.get('address') as string,
          aptSuite: formData.get('apt-suite') as string,
          city: formData.get('city') as string,
          country: formData.get('country') as string,
          state: formData.get('state-province') as string,
          postalCode: formData.get('postal-code') as string,
        })
        onClose()
      }}
    >
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input defaultValue={data.shippingAddress.firstName} name="first-name" required />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input defaultValue={data.shippingAddress.lastName} name="last-name" required />
            </Field>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Address</Label>
              <Input placeholder="Street address" defaultValue={data.shippingAddress.address} type={'text'} name="address" required />
            </Field>
            <Field>
              <Label>Apt, Suite *</Label>
              <Input placeholder="Apartment, suite, etc. (optional)" defaultValue={data.shippingAddress.aptSuite} name="apt-suite" />
            </Field>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>City</Label>
              <Input defaultValue={data.shippingAddress.city} name="city" required />
            </Field>
            <Field>
              <Label>Country</Label>
              <Select defaultValue={data.shippingAddress.country || "United States"} name="country">
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Other">Other</option>
              </Select>
            </Field>
            <Field>
              <Label>State/Province</Label>
              <Input defaultValue={data.shippingAddress.state} name="state-province" required />
            </Field>
            <Field>
              <Label>Postal code</Label>
              <Input defaultValue={data.shippingAddress.postalCode} name="postal-code" required />
            </Field>
          </div>

          <Field className="max-w-lg">
            <Legend>Address type</Legend>
            <RadioGroup
              className="mt-1.5 grid grid-cols-1 gap-2 space-y-0! sm:grid-cols-2 sm:gap-3"
              name="address-type"
              defaultValue="at-home"
              aria-label="Address type"
            >
              <RadioField>
                <Label>
                  <span className="text-sm font-medium">
                    Home <span className="font-light">(All Day Delivery)</span>
                  </span>
                </Label>
                <Radio value="at-home" defaultChecked />
              </RadioField>

              <RadioField>
                <Label>
                  <span className="text-sm font-medium">
                    Office{' '}
                    <span className="font-light">
                      (Delivery <span className="font-medium">9 AM - 5 PM</span>)
                    </span>
                  </span>
                </Label>
                <Radio value="at-office" />
              </RadioField>
            </RadioGroup>
          </Field>

          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            <ButtonPrimary type="submit">Save shipping address</ButtonPrimary>
            <ButtonThird type="button" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

export default Information
