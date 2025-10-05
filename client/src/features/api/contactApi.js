import { apiSlice } from './apiSlice';

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (data) => ({
        url: '/contact',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    getContacts: builder.query({
      query: ({ status } = {}) => {
        const params = new URLSearchParams();
        if (status) params.append('status', status);
        return `/contact?${params}`;
      },
      providesTags: ['Contacts'],
    }),
    updateContactStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/contact/${id}`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useSubmitContactMutation,
  useGetContactsQuery,
  useUpdateContactStatusMutation,
  useDeleteContactMutation,
} = contactApi;
