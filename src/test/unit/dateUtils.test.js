const expect = require('chai').expect;
const { getDaysFromNow, getDays, getYearsFromNow } = require('../../utils/dateUtils');

beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-02-03'));
});

afterAll(() => {
    jest.useRealTimers();
});

describe('dateUtils', () => {

    it('getYearsFromNow', () => {
        let years = getYearsFromNow(new Date('2024-02-03'));
        expect(years).equal(3);

        years = getYearsFromNow(new Date('2016-02-03'));
        expect(years).equal(11);
    })

    it('getDays', () => {
        let days = getDays(new Date('2025-01-12'), new Date('2025-01-15'));
        expect(days).equal(3);

        days = getDays(new Date('2025-01-01'), new Date('2024-01-01'));
        expect(days).equal(366);

        days = getDays(new Date('2024-01-01'), new Date('2024-01-01'));
        expect(days).equal(0);
    });
    it('getDaysFromNow', () => {
        let days = getDaysFromNow(new Date('2026-02-03'));
        expect(days).equal(0);
        days = getDaysFromNow(new Date('2026-02-06'));
        expect(days).equal(3);
        days = getDaysFromNow(new Date('2026-01-30'));
        expect(days).equal(4);
    });
});

