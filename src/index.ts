import R from 'ramda';

const enum CookieType {
  FirstParty = '1st party',
  ThirdParty = '3rd party',
}

const add(x: number) => x + 1;

  console.log(CookieType.FirstParty);

const COOKIE_TYPES = [CookieType.FirstParty, CookieType.ThirdParty];

const foo = (type: CookieType): boolean => {
  return type === CookieType.FirstParty;
};

console.log(foo(CookieType.FirstParty));
