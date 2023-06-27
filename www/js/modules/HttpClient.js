const HTTPClient = {};

HTTPClient.get = async url => {
  try {
    const response = await fetch(url);
    const parser = response.headers.get('content-type')?.includes('application/json') ? 'json' : 'text';
    const data = await response[parser]();
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête GET:', error);
    throw error;
  }
}

HTTPClient.post = async (url, data = null) => {
  try {
    const options = {
      method: 'post',
    }

    if(data !== null) {
      if(data.constructor.name === 'FormData') {
        options.body = data
      }
    }

    const response = await fetch(url, options);
    const parser = response.headers.get('content-type')?.includes('application/json') ? 'json' : 'text';
    const data = await response[parser]();
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête POST:', error);
    throw error;
  }
}

export { HTTPClient };