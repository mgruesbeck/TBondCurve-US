# US Treasury Bond Yield Curve Inversion

### Intro
![Image of inversion](https://github.com/mgruesbeck/TBondCurve-US/blob/master/ScreenShot2018-12-04at9.56.39AM.png)

On December 3, 2018 US T-bond yield curves inverted. This was all very facinating so I wanted a historical understanding of this. Specifically, when comparing set maturities, how often and when has this happened?

### Background

On December 3, 2018 I read this [Bloomberg article](https://www.bloomberg.com/opinion/articles/2018-12-03/u-s-yield-curve-just-inverted-that-s-huge) on TBond yield Inversion. It took a while to understand but found this great summary from [chadash](https://news.ycombinator.com/user?id=chadash) on [news.ycombinator.com](https://news.ycombinator.com/item?id=18593407).

>A quick explanation in layman's terms:
I have money on hand and I want to put it into something safe. The US government is constitutionally bound to pay its debts, and is generally considered to be very safe (if not the safest investment around).The US government sells bonds with different terms. I can buy 1 year bonds, 3 year bonds, 5 year bonds, 10 year bonds, etc. The treasury sets a fixed interest rate and face value on treasury notes and then whoever pays the most gets the note.

>Right now, (annualized) rates [1] are approximately as follows: 1 month - 2.30% 6 month - 2.56% 1 year - 2.72% 3 year - 2.84% 5 year - 2.83% 7 year - 2.90% 10 year - 2.98%

>Notice that the 3 year rates are higher than the 5 year rates. Generally speaking, if I'm going to lock up my money for more time, I expect a higher return. However, today, the 3 year notes are getting a higher rate of return than the 5 year notes. Why?

>Interest rates generally tend to follow the economy at large. When the economy is doing well, people will invest in stocks and other investments and are less willing to pay for the safety of treasuries, so effective rates go up when people bid less at treasury auctions (additionally, the government will take steps via the Federal Reserve to make rates higher). By the same token, when the economy isn't doing well, people want the safety of treasuries, even if they pay less, so effective rates on treasuries tend to go down.

>In rare cases, the yield curve will invert. What this means is that investors think that rates of return on government bonds are going to go down in the future. In order to lock in a better rate now, they're willing to pay more for longer term bonds (in this case, 5 year bonds vs. 3 year bonds) in order to "lock-in" the good rates. The assumption is that they won't be able to get the same good rates if they don't act now.

>Note that only the 3 and 5 years have inverted. If people were really panicked, you would probably see a more significant inversion, where for example, the 1 year was higher than the 2 year and the 2 higher than the 3, etc.

>[1] these rates are actual rates of return calculated based on the auction price paid
[chadash](https://news.ycombinator.com/user?id=chadash)

### Data

Yield curve data is avalible at [treasury.gov](https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yieldAll). This data covers all maturities (1Mo, 2Mo, 3Mo, 6Mo, 1Yr, 2Yr, 3Yr, 5Yr, 7Yr, 10Yr, 20Yr, 30Yr) for years 1990 through 2018.

##### Two and five year maturities (1990-2008)

[1990-2018-2yr-5yr.tsv](https://github.com/mgruesbeck/TBondCurve-US/blob/master/DailyTreasuryYieldCurveRates1990-2018-2yr-5yr.tsv)

##### All maturities (1990-2008)

[1990-2018-All.tsv](https://github.com/mgruesbeck/TBondCurve-US/blob/master/DailyTreasuryYieldCurveRates1990-2018-All.tsv)

### Results
